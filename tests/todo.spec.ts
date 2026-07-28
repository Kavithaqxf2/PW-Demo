import { test } from '@playwright/test';
import { TodoPage } from '../pages/PageObjects/todo.page';

test.describe('TodoMVC page object', () => {
  test('should add a todo and capture screenshot', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.goto();
    await todoPage.addTodo('Buy groceries');
    await todoPage.expectTodoCount(1);
    await todoPage.expectTodoText(0, 'Buy groceries');
    await todoPage.takeScreenshot('screenshot/todo-buys-groceries.png');
  });
});
