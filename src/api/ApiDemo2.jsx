import { useEffect, useState } from "react";
import axios from "axios";
function ApiDemo2() {
    const [response, setResponse] = useState("");

    const baseUrl = "https://jsonplaceholder.typicode.com/posts";
    useEffect(() => {
        var dataResponse = async function () {
            var response = await axios
                .post(baseUrl, {
                    // userId: 1,
                    title: "title",
                    body: "body",
                },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
            // if (!response.ok) {
            //     throw new Error(`HTTP error! status: ${response.status}`);
            // }
            var jsonResponse = response.data;
            console.log(jsonResponse);
            setResponse(jsonResponse);
            return jsonResponse;
        };
        dataResponse();
    }, []);

    return (
        <div>
            <h2>Axios Demo 2</h2>
            <h1>{response}</h1>
        </div>
    );
}
export default ApiDemo2;
