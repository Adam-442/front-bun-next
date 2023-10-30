declare module 'csvjson-csv2json' {
    interface Options {
        separator?: string;
        parseNumbers?: boolean;
        parseJSON?: boolean;
        transpose?: boolean;
        hash?: boolean;
    }
  
    function csv2json(csvString: string, options?: Options): any[];
  
    export = csv2json;
  }