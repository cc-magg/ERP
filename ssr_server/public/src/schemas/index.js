//aqui crearemos los esquemas que necesitemos
import api from '../api.json';

import { normalize, schema } from 'normalizr';
//https://github.com/paularmstrong/normalizr/blob/master/docs/api.md
//Entity(key, definition = {}, options = {}) estos son los parametros de Entity (el ultimo es opcional)
//processStrategy(value, parent, key) esta funcion se usa para alterar los datos del objeto
//define a media schema
const media = new schema.Entity('media', {}, {
    processStrategy: (value, parent, key) => ({...value, category:parent.id })
});

//define a categories schema
const category = new schema.Entity('categories', {
    playlist: new schema.Array(media)
});

const categories = { categories: new schema.Array(category)}

const normalizedData = normalize(api, categories);

export default normalizedData;
