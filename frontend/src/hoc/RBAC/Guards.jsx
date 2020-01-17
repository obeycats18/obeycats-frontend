import { guardFactory } from "react-rbac-guard";
 
import {NeedProjectNanager, NeedDeveloper, NeedClient} from './Requirements'

export const ProjectNanager = guardFactory(NeedProjectNanager);
export const Developer = guardFactory(NeedDeveloper);
export const Client = guardFactory(NeedClient);