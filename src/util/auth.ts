
interface DecodedToken {
    tipoUsuario?: string;
    role?: string;
    rol?: string;
    authorities?: string[] | { authority: string }[];
    sub?: string;
}


export const getDecodedToken = (): DecodedToken | null => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
        const parts = token.split(".");
        if (parts.length !== 3) {
            console.error("Token JWT con formato inválido");
            return null;
        }

        const payload = parts[1];
        const json = atob(payload);
        const decoded = JSON.parse(json);

        console.log("📦 TOKEN DECODIFICADO:", decoded);
        return decoded;
    } catch (err) {
        console.error("Error decodificando token:", err);
        return null;
    }
};


export const getUserRole = (): string | null => {
    const decoded = getDecodedToken();
    if (!decoded) return null;

    if (decoded.tipoUsuario) {
        return decoded.tipoUsuario;
    }

    if (decoded.role) return decoded.role;
    if (decoded.rol) return decoded.rol;


    if (decoded.authorities) {
        const auths = decoded.authorities;

        if (Array.isArray(auths) && auths.length > 0) {
            const first = auths[0];

            if (typeof first === "string") {
                return first;
            }

            if (typeof first === "object" && (first as any).authority) {
                return (first as any).authority;
            }
        }
    }

    if (decoded.sub && decoded.sub.toLowerCase() === "admin@duoc.cl") {
        return "ADMIN";
    }

    return null;
};
