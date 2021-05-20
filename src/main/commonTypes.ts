export type ForAxiosDefs =
    | "get"
    | "GET"
    | "delete"
    | "DELETE"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS"
    | "post"
    | "POST"
    | "put"
    | "PUT"
    | "patch"
    | "PATCH"
    | "link"
    | "LINK"
    | "unlink"
    | "UNLINK"
    | undefined;

export interface QuizStateDef {
    data: Array<{
        category: string;
        type: string;
        difficulty: string;
        question: string;
        correct_answer: string;
        incorrect_answers: Array<string>;
    }>;
}
