/// <reference path="./typings/index.d.ts" />

import * as Elasticsearch from "elasticsearch";

interface Historical
{
    origin: string;
    enter_date: Date;
    leave_date: Date;
    focus_elapsed_time: number;
    total_elasped_time: number;
    url: string; 
}

export class PumgranaAPI
{
    private readonly UserHist : Historical;
    public constructor(Url : string)
    {
        let client : Elasticsearch.Client = new Elasticsearch.Client({host : Url});
    }
}