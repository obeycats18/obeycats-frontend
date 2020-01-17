import { Requirement } from "react-rbac-guard";
 
export class Need extends Requirement {
  constructor(role) {
    super();
    this.role = role;
  }
  
  
  isSatisfied(credentials) {
    console.log('credential', credentials[this.role])
    // assume credentilas is an object
    return credentials[this.role] ? true : false;
  }
}