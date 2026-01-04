export const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-light">
                <div className="container py-2 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
                    <div className="small">
                        © 2025 <strong>Origenes RestoBar</strong>. 
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        <a href="https://wa.me/0000000000" className="text-light" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <i className="bi bi-whatsapp fs-4"></i>
                        </a>
                        <a href="https://www.instagram.com/" className="text-light" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="bi bi-instagram fs-4"></i>
                        </a>
                        <a href="https://twitter.com/" className="text-light" target="_blank" rel="noopener noreferrer" aria-label="Twitter X">
                            <i className="bi bi-twitter-x fs-4"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer