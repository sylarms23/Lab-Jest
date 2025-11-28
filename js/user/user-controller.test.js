const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    // Antes de agregarlo, NO debe estar en la lista
    expect(userController.getUsers()).not.toContain(user);
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });


test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    // Antes de agregarlo, NO debe estar en la lista
    expect(userController.getUsers()).not.toContain(user);
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test("findByEmail(): retorna null si no existe", () => {
    const result = userController.findByEmail("no@mail.com");

    expect(result).toBeUndefined();
})

test('findByEmail() debe retornar el usuario correspondiente al email', () => {
    let user = new User(111, "Carlos", "carlos@generation.org");
    userController.add(user);

    const found = userController.findByEmail("carlos@generation.org");

    expect(found).toBe(user);
});

test('findById() debe retornar el usuario correspondiente al id', () => {
    let user = new User(123, "Carlos", "carlos@generation.org");
    userController.add(user);

    const found = userController.findById(123);

    expect(found).toBe(user);
});


test('findById() debe retornar undefined si el id no existe', () => {
    let user = new User(222, "Lucia", "lucia@generation.org");
    userController.add(user);

    const found = userController.findById(999); // ID inexistente

    expect(found).toBeUndefined();
});

