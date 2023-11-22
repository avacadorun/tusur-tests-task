export class Salary {
    private salary: number;
    private name: string;

    constructor(name: string = "", salary: number = 0) {
        this.name = name;
        this.salary = salary;
    }

    public getSalary(): number {
        return this.salary;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        if (name === null) {
            throw new Error("Имя не может быть пустым.");
        }
        this.name = name;
    }

    public setSalary(salary: number): void {
        if (salary < 0) {
            throw new Error("Зарплата не может быть отрицательной.");
        }
        this.salary = salary;
    }

    public getGrossSalary(): number {
        return this.salary + this.getSocialInsurance() + this.getAdditionalBonus();
    }

    private getSocialInsurance(): number {
        return this.salary * 0.25;
    }

    private getAdditionalBonus(): number {
        return this.salary * 0.1;
    }
}
