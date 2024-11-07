
export default function json2html(data) {
    // Create the opening table tag with the data-user attribute
    let html = `<table data-user="nishaanth999@gmail.com">`;
  
    // Create table headers (columns)
    html += `
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
    `;
  
    // Loop through each data object and create a row for it
    data.forEach(item => {
      html += `<tr>`;
      html += `<td>${item.Name}</td>`;
      html += `<td>${item.Age}</td>`;
      // If Gender exists, add it, otherwise skip it
      html += item.Gender ? `<td>${item.Gender}</td>` : ``;
      html += `</tr>`;
    });
  
    // Close the table tags
    html += `</tbody></table>`;
  
    // Return the final HTML table as a string
    return html;
  }
  