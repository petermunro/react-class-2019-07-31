import React from "react";

const Address = ({ address: { line1, town, county, country } }) => (
  <div>
    <p>{line1}</p>
    <p>{town}</p>
    <p>{county}</p>
    <p>{country}</p>
  </div>
);

// class Address2 extends Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.address.line1}</p>
//         <p>{this.props.address.town}</p>
//         <p>{this.props.address.county}</p>
//         <p>{this.props.address.country}</p>
//       </div>
//     );
//   }
// }

export default Address;
