import * as app from "./app";
import * as math from "./math";
test("calls math.add", () => {
  
  const originalAdd = math.add;
  
  math.add = jest.fn(originalAdd);
  
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);
  
  math.add.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  expect(math.add).toHaveBeenCalledWith(1, 2);
  
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});

// Lo primero que realiza es almacenar la informacion original( Linea 5)
// despues realiza un simulacro de agragar con la implementacion original ( Linea 7)
// Espia las llamadas para agregar ( Linea 9,10 )
// Anula la implementacion ( Linea 12,13,14)
// Y restaura la implementacion original ( Linea 16, 17)