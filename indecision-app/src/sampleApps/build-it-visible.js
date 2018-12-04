console.log('Built It Visible');

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visibility: false };
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    { this.state.visibility ? ' Hide Details' : ' Show Details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey! Whatsuppp?</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const appRoot = document.getElementById('app');
//
// const app = {
//     title: 'Visibility Toggle',
//     subtitle: 'Subtitle',
//     options: [],
// };
//
// const toggleShow = () => {
//     visibility = !visibility;
//     render();
// };
//
// let visibility = false;
//
// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleShow}>
//                 { visibility ? ' Hide Details' : ' Show Details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey! Whatsuppp?</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };
//
// render();