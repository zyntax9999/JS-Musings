function createTable(container, data) {
  $('.table').remove()
  let table = $('<table/>').addClass('table table-bordered table-sm')
  $.each(data, function (rowIndex, r) {
    let row = $('<tr/>')
    $.each(r, function (colIndex, c) {
      row.append($('<t' + (rowIndex === 0 ? 'h scope="row"' : 'd scope="column"') + '/>').text(c))
    })
    table.append(row)
  })
  return container.append(table)
}

