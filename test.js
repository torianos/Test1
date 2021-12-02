/*
    task
    1. Напишите функцию подготовки строки, которая заполняет шаблон данными из указанного объекта
    2. Пришлите код целиком, чтобы можно его было проверить
    3. Придерживайтесь code style текущего задания
    4. По необходимости - можете дописать код, методы
    5. Разместите код в гите и пришлите ссылку
*/

/*
 * Класс для работы с API
 *
 * @author		User Name 
 * @version		v.1.0 (dd/mm/yyyy)
 */
 class Api
 {
     constructor() 
     {
 
     }
 
 
     /**
      * Заполняет строковый шаблон template данными из объекта object
      *
      * @author		User Name 
      * @version		v.1.0 (dd/mm/yyyy)
      * @param		{object} object
      * @param		{string} template
      * @return		{string}
      */
     get_api_path(object, template)
     {
        let result = template;
        let keys = Object.keys(object);
        keys.forEach((key) => {
          result = result.replace(new RegExp("%" + key + "%", "g"), encodeURIComponent(object[key]));
        });
        return result;
     }
 }
 
 
 let user =
 {
     id		: 20,
     name	: 'John Dow',
     role	: 'QA',
     salary	: 100
 };
 
 let api_path_templates =
 [
     "/api/items/%id%/%name%",
     "/api/items/%id%/%role%",
     "/api/items/%id%/%salary%"
 ];
 
 let api = new Api();
 
 let api_paths = api_path_templates.map((api_path_template) =>
 {
     return api.get_api_path(user, api_path_template);
 });
 
 console.log(JSON.stringify(api_paths));

 