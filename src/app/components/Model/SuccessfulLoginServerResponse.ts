export class SuccessfulLoginServerResponse{
    public constructor(
        public token?:number,       
        public userRole:string = ""
    ){}

}