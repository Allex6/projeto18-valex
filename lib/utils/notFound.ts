import errorFactory from './errorFactory';

export default function notFound(entity: string){
    return errorFactory('not_found', `Could not find ${entity}`);
}