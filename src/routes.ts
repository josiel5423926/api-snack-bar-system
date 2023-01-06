import { Response, Request } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name:"NodeJs", 
        duration:10,
        educator: "Josiel"
    });
    return response.send();
}
