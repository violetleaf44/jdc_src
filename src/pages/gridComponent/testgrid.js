
import Testchart from './testchart'

function Testgrid() {
  return (
     <table className='assetTable'>
      <tr>
        <td><Testchart i="0" /></td>
        <td><Testchart i="1" /></td>
      </tr>
      <tr>
        <td><Testchart i="3" /></td>
        <td><Testchart i="4" /></td>
        </tr>
    </table>

    
  );
}

export default Testgrid;