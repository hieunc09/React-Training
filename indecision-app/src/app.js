console.log('App.js in running');

// JSX - Javascript XML

let template = (
    <div>
        <h1 className="title" id="pID">Page title</h1>
        <p> Subtitle</p>
        <ol>
            <li>number 1</li>
            <li>number 2</li>
        </ol>
    </div>
);

let user = {
    name: 'HieuNC....',
    age: 27,
    location: 'Ha Noi'
};

function getLocation(location) {
    if (location) {
        return <h3>Location : {location}</h3>;
    }
    return 'Unknown';
}

let person = (
    <div>
        <h1>{user.name}</h1>
        {user.age && user.age > 20 && <p>Age : {user.age}</p>}
        <p> Age : {user.age ? user.age : 'Unknown'}</p>
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(person, appRoot);