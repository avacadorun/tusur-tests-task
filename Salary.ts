class Salary {
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
            throw new Error("Negative name is invalid.");
        }
        this.name = name;
    }

    public setSalary(salary: number): void {
        if (salary < 0) {
            throw new Error("Negative salary is invalid.");
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

    public toString(): string {
        return `{
            name: ${this.name},
            salary: ${this.salary}
        }`;
    }
}

// Пример использования
const employee = new Salary("Иванов", 15000);
console.log(employee.getGrossSalary());
