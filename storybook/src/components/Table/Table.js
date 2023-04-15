export const Table = () => {
    return (
        <div className="container">
      <h3>Most Liked Stories</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice in Wonderland</td>
              <td>Lewis Carroll</td>
              <td>110</td>
            </tr>
            <tr>
              <td>5 Centimeters Per Second</td>
              <td>Mamura Daiki</td>
              <td>97</td>
            </tr>
            <tr>
              <td>Charlie</td>
              <td>Lilly Stains</td>
              <td>89</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Totals</td>
              <td>21</td>
              <td>23</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
};