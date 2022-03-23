import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
    const { alert } = useContext(AlertContext);
    return (
        alert && (
            <div className={`grid grid-cols-1 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-8 mb-4`}>
                <div className={`alert alert-${alert.type}`}>
                    <div>
                        <svg fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current mr-3">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                            ></path>
                        </svg>
                        <strong>{alert.msg}</strong>
                    </div>
                </div>
            </div>
        )
    );
}

export default Alert;
