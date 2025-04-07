function Nav({ scps, onScpSelect }) {
    return (
      <div className="sidebar">
        <h2>SCP List</h2>
        <ul>
          {scps.map((scp) => (
            <li key={scp.id} onClick={() => onScpSelect(scp)}>
              {scp.id}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Nav;