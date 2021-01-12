function App() {
  return (
    <div className='container'>
      <div id='container'>
        <div id='toolbar'>
          <div className='col' id='col-1'>
            <button id='add-col-btn' className='btn col-button'>
              Add Column
            </button>
            <button id='remove-col-btn' className='btn col-button'>
              Remove Column
            </button>
          </div>
          <div className='col' id='col-2'>
            <button id='fillall-btn' className='btn select-column'>
              Fill All
            </button>
            <button id='filluncolored-btn' className='btn select-column'>
              Fill Uncolored
            </button>
            <button id='clearall-btn' className='btn select-column'>
              Clear All
            </button>
            <select name='color-select' id='color-select'>
              <option>Red</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Purple</option>
              <option>Pink</option>
              <option>Uncolor</option>
            </select>
            <button id='download-btn' className='btn col-button'>
              &#8595;
            </button>
          </div>
          <div className='col' id='col-3'>
            <button id='add-row-btn' className='btn col-button'>
              Add Row
            </button>
            <button id='remove-row-btn' className='btn col-button'>
              Remove Row
            </button>
          </div>
        </div>
        <div id='content'>
          <table>
            <tr>
              <td>&nbsp;</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
