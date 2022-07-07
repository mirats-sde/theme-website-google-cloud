import './Dropdown.css';

function Dropdown() {
    return (
        <div className="dropdown">
            <div className="dropdown-btn">
                <div className="dropdown-content">
                    <div className="dropdown-item">
                        English
                    </div>
                    <div className="dropdown-item">
                        Japanese
                    </div>
                    <div className="dropdown-item">
                        Chinese
                    </div>
                    <div className="dropdown-item">
                        Korean
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;