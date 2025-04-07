function Scp({ scp }) {
    if (!scp) {
      return <div>Choose SCP</div>;
    }
  
    return (
      <div className="scp-entry">
        <h2>{scp.id} - {scp.title}</h2>
        <p><strong>Object Class:</strong> {scp.objectClass}</p>
        <p><strong>Description:</strong> {scp.description}</p>
        <p><strong>Containment Procedures:</strong> {scp.specialContainmentProcedures}</p>
        <p><strong>Additional Notes:</strong> {scp.additionalNotes}</p>
        <p><strong>Appendix:</strong> {scp.appendix}</p>
        {scp.image && <img src={scp.image} alt={scp.id} className="scp-image" />}
      </div>
    );
  }
  
  export default Scp;