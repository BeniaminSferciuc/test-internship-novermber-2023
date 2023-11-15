import style from "./Home.module.css";
import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Modal from "../../components/Modal/Modal.jsx";

const Home = () => {
    const [data, setData] = useState(null);
    const ref = useRef(null);
    const [time, setTime] = useState(null);
    const d = new Date();

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${ref.current.value}`
        )
            .then((response) => response.text())
            .then((body) => setData(body));
    };

    data && console.log(JSON.parse(data));

    const onDelete = (id) => {
        setData(JSON.parse(data).filter((e) => e.id !== id));
    };

    return (
        <main className={style.main}>
            <form onSubmit={handleSubmit} className="d-flex gap-3">
                <input
                    className="form-control"
                    ref={ref}
                    type="text"
                    maxLength={100}
                    required
                    placeholder="Search"
                />
                <input
                    type="submit"
                    value="Search Word"
                    className="btn btn-primary"
                />
            </form>
            {data && (
                <table className="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Word</th>
                            <th>Datetime</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            JSON.parse(data).map((item, index) =>
                                item.word ? (
                                    <tr key={index}>
                                        <td>{item.word}</td>
                                        <td>{`${d.getDate()}.${d.getMonth()}.${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}`}</td>
                                        <td className="d-flex gap-3">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                View
                                            </button>
                                            <Modal data={data} />
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => onDelete(index)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ) : null
                            )}
                    </tbody>
                </table>
            )}
        </main>
    );
};

export default Home;
