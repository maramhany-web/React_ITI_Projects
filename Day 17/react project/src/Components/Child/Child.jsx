export default function Child({profile}) {
    let { name, age, job, isStudent } = profile;
    return (
        <div className="card w-75 justify-content-center mx-auto my-4">
            <h2 className="card-title text-center bg-danger text-white p-3">Child Component</h2>

            <div className="card-body text-center bg-dark text-white p-4 my-3">
                <h5 className="card-title">{name}</h5>
                <h5 className="card-text">Age: {age}</h5>
                <h5 className="card-text">Job: {job}</h5>
                <h5 className="card-text">Is Student: {isStudent ? "Yes" : "No"}</h5>
            </div>
        </div>
    );
}
