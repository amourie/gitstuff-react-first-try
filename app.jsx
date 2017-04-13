function Application() {
    return (
     <div>
       <h1>Hello from React</h1>
       <p>
        I was rendered from the Application compontent!
       </p>
     </div>
    );
}

ReactDOM.render(<Application/>, document.getElementById('container'));
