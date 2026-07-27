import { expect, Locator, Page } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly newTodoInput: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodoInput = page.locator('.new-todo');
    this.todoItems = page.locator('.todo-list li');
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc/');
  }

  async addTodo(todoText: string) {
    await this.newTodoInput.fill(todoText);
    await this.newTodoInput.press('Enter');
  }

  async expectTodoCount(expectedCount: number) {
    await expect(this.todoItems).toHaveCount(expectedCount);
  }

  async expectTodoText(index: number, expectedText: string) {
    await expect(this.todoItems.nth(index)).toContainText(expectedText);
  }

  async takeScreenshot(filePath: string) {
    await this.page.screenshot({ path: filePath, fullPage: false });
  }
}
