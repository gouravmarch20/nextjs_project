const TableUi = ({ tableD }) => {
    return (
      <>
        <table>
          <thead>
            <tr>
              <td> R1 </td>
  
              <td> R3 </td>
  
              <td> R3 </td>
            </tr>
          </thead>
          <tbody>
            {tableD &&
              tableD?.length > 0 &&
              tableD?.map((post) => (
                <tr key={post.id}>
                  <tr>
                    <td> {post.title.substring(0, 30)} </td>
  
                    <td> {post.body.substring(0, 30)} </td>
  
                    <td> {post.userId} </td>
                  </tr>
                </tr>
              ))}
          </tbody>
        </table>
      </>
    );
  };
  export default TableUi;
  