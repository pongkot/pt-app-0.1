export class Logger {
  private domain: string;

  constructor(domain: string) {
    this.domain = domain;
  }

  log(message: string): void {
    const content: string = this.getMessageLogPattern().replace(
      "::message",
      message
    );
    console.log(content);
  }

  private getMessageLogPattern(): string {
    return `${new Date().toISOString()} [${this.domain}] ::message`;
  }
}
