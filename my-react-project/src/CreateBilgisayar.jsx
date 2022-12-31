

import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./login.css"

export const CreateBilgisayar= () => {
    const [movie, setMovie] = useState({
        userName1: "",
        userName2: ""
    });
    const [error, setError] = useState();

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const url = "http://localhost:8081/records";
        let response;

        try {
            response = await fetch(url, {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(movie)
            });
        } catch (err) {
            setError(err);
        }

        if (response.status === 201) {
            navigate('/OyuncuBilgisayar');
        } else {
            setError("Hata...");
        }
    };

    return (
        <form className="Auth-form" onSubmit={submitHandler}>
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">İSMİNİZİ GİRİNİZ</h3>

                <div className="form-group mt-3">
                    <label>Oyuncu 1:</label>
                    <input
                        type="text"
                        className="form-control mt-1"

                        onChange={(e) => setMovie(prevState => ({
                            ...prevState,
                            userName1: e.target.value
                        }))}
                    />
                </div>

                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                        BAŞLA-->
                    </button>
                </div>

            </div>
        </form>
    )
}

