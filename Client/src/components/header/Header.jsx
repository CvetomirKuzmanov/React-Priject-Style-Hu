import './Header.css'
import { useNavigate } from 'react-router';
import useAuth from "../../hooks/useAuth";


export default function Header() {
    const navigate = useNavigate()
    const { email, isAuthenticated } = useAuth();

    return (
        <header className="header">
            <div className="container header-container">
                <a href='/' className="logo">Style<span>Hub</span></a>
                <nav className="nav">
                    <a href="/" className="nav-link">Home</a>
                    <a href="/catalog" className="nav-link">Products</a>
                    <a href="/about" className="nav-link">About</a>
                </nav>
                <div className="nav-icons">
                    {isAuthenticated
                        ? (
                            <div>

                                < button onClick={() => navigate('/create')} className="nav-icon">
                                    <span className="icon-text">Create</span>
                                </button>
                                <button onClick={() => navigate('/checkout')} className="nav-icon">
                                    <span className="icon-text">Favourites</span>
                                </button>
                                <button onClick={() => navigate('/logout')} className="nav-icon">
                                    <span className="icon-text">Logout</span>
                                </button>
                            </div>

                        ) : (
                            <div>
                                <button onClick={() => navigate('/login')} className="nav-icon">
                                    <span className="icon-text">Login</span>
                                </button>
                                <button onClick={() => navigate('/register')} className="nav-icon">
                                    <span className="icon-text">Register</span>
                                </button>
                            </div>

                        )
                    }
                </div>
            </div>
        </header >
    );
}