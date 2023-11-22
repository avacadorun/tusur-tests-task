import { Salary } from "./Salary.ts";
import { describe, test, expect } from "bun:test";

describe("Тестирование класса Salary", () => {
  test("Создание экземпляра Salary с значениями по умолчанию", () => {
    const salary = new Salary();
    expect(salary.getName()).toBe("");
    expect(salary.getSalary()).toBe(0);
  });

  test("Установка и получение имени и зарплаты", () => {
    const salary = new Salary("Иван", 10000);
    expect(salary.getName()).toBe("Иван");
    expect(salary.getSalary()).toBe(10000);
  });

  test("Установка и изменение имени и зарплаты", () => {
    const salary = new Salary("Иван", 10000);

    salary.setName("Петр");
    salary.setSalary(15000);
    expect(salary.getName()).toBe("Петр");
    expect(salary.getSalary()).toBe(15000);
  });

  test("Расчет общей зарплаты", () => {
    const salary = new Salary("Иван", 10000);
    expect(salary.getGrossSalary()).toBe(10000 + 10000 * 0.25 + 10000 * 0.1);
  });

  test("Выброс исключения при установке отрицательной зарплаты", () => {
    const salary = new Salary("Иван", 10000);
    expect(() => salary.setSalary(-1000)).toThrow(Error);
  });

  test("Расчет общей зарплаты при нулевой зарплате", () => {
    const salary = new Salary("Иван", 0);
    expect(salary.getGrossSalary()).toBe(0);
  });

  test("Расчет общей зарплаты при очень большой зарплате", () => {
    const salary = new Salary("Иван", 1000000000);
    expect(salary.getGrossSalary()).toBeCloseTo(
      1000000000 + 1000000000 * 0.25 + 1000000000 * 0.1,
    );
  });

  test("Корректная смена имени", () => {
    const salary = new Salary("Иван", 10000);
    salary.setName("Алексей");
    expect(salary.getName()).toBe("Алексей");
  });
});
