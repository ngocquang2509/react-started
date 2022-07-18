import Game from "./components/Game";
import Clock from "./components/Clock";

function App() {
  return (
    <div>
      <h2>React started</h2>
      <Game />
      <Clock />
    </div>
  );
}

// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isToogleOn: true,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState((prevState) => ({
//       isToogleOn: !prevState.isToogleOn,
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToogleOn ? "ON" : "OFF"}
//       </button>
//     );
//   }
// }

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function LoginButton(props) {
//   return <button onClick={props.onClick}>Login </button>;
// }

// function LogoutButton(props) {
//   return <button onClick={props.onClick}>Logout </button>;
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = { isLoggedIn: false };
//   }

//   handleLoginClick() {
//     this.setState({ isLoggedIn: true });
//   }

//   handleLogoutClick() {
//     this.setState({ isLoggedIn: false });
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 && (
//         <h2>You have {unreadMessages.length} unread messages.</h2>
//       )}
//     </div>
//   );
// }

// const messages = ["React", "Re: React", "Re:Re: React"];

// //Prevent render
// function WariningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }
//   return <div>Warning!</div>;
// }

// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { showWarning: true };
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }

//   handleToggleClick() {
//     this.setState((prevState) => ({
//       showWarning: !prevState.showWarning,
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <WariningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? "Hide" : "Show"}
//         </button>
//       </div>
//     );
//   }
// }

export default App;
