import { Grid } from "@/app/(Components)/Grid";
import { CommentSectionSelf } from "./CommentSectionSelf";
import { Card } from "@/app/(Components)/PostCards";
import { Comment } from "./Comment";
import { Dispatch, SetStateAction } from "react";

export function CommentSecton({ docComments, id, setDocComments }: { docComments: Card["comments"], id: string, setDocComments: Dispatch<SetStateAction<Card["comments"]>> }) {
    return <div className="px-6 sm:px-28 md:px-40 lg:px-56 pt-12 pb-40 overflow-auto">
        <CommentSectionSelf id={id} setDocComments={setDocComments} />
        {/* <Grid className="gap-[10px]" colRange={800}> */}
        {docComments.sort((a, b) => b.dateMaths - a.dateMaths).map((i, j) => <Comment {...i} key={i.comment + i.username + j} />)}
        {/* </Grid> */}
    </div>
}