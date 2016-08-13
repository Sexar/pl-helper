/**
 * Created by sexar on 31/05/15.
 */

/// <reference path="declarations/jquery.d.ts" />

class Helper{

    /**
     * Format a number with commas.
     * @param {number} num
     * @returns {string} formatted amount.
     */
    static addCommas(num: number): string {
        var arr  : string[],
            temp : string,
            rgx  : RegExp = /(\d+)(\d{3})/;

        temp   = num + '';
        arr    = temp.split('.');
        arr[1] = (arr[1]) ? '.' + arr[1] : '';

        while(rgx.test(arr[0]))
            arr[0] = arr[0].replace(rgx, '$1' + ',' + '$2');

        return arr[0] + arr[1];
    }

    /**
     * Center an item with respect to his parent.
     * @param {jQuery} item
     * @param {boolean} toParent
     * @param {string} orientation
     * @returns {void}
     */
    static centerItem(item: JQuery, toParent: boolean = true, orientation: string = 'BOTH'): void {
        var container : JQuery = (toParent) ? item.parent() : $(window),
            position  : string = item.css('position');

        // Obtains values.
        var left = (container.outerWidth() - item.outerWidth()) / 2,
            top  = (container.outerHeight() - item.outerHeight()) / 2;

        // Check if the position is absolute to asign a left and top values.
        if(position === 'absolute' || position === 'fixed'){
            if(orientation === 'HORIZONTAL' || orientation === 'BOTH') item.css({'left': left});
            if(orientation === 'VERTICAL' || orientation === 'BOTH') item.css({'top': top});

        } else {
            if(orientation === 'HORIZONTAL' || orientation === 'BOTH') item.css({'margin-left': left});
            if(orientation === 'VERTICAL' || orientation === 'BOTH') item.css({'margin-top': top});

        }

    }

    /**
     * Convert a date with format yyyy-mm-dd hh:mm:ss to human date.
     * @param {string} date
     * @returns {string} formatted date
     */
    static dateToHumanFormat(date: string): string {
        var days   : string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            months : string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            d      : string[] = (date.split(' ')[0]).split('-');

        return d[2] + ' de ' + months[parseInt(d[1])] + ' de ' + d[0];
    }

    /**
     * Generate a random number.
     * @param {number} num
     * @returns {number} random number
     */
    static getRandNum(num: number): number {
        return Math.floor(num * (Math.random() % 1));
    }

    /**
     * Generate a random number between two numbers.
     * @param {number} min
     * @param {number} max
     * @returns {number} random number
     */
    static getRangeRandNum(min: number, max: number): number {
        return min + Helper.getRandNum(max - min + 1);
    }

    /**
     * Go to anchor with animation.
     * @param {string} hash
     * @param {number} scrollTime
     * @param {number} extraOffset
     * @returns {void}
     * Note: Regular expression to validate the hash /^#(.*)$/
     */
    static goToAnchor(hash: string, scrollTime: number = 1000, extraOffset: number = 0): void {
        if($(hash).length){
            var offset = $(hash).offset().top - extraOffset;

            $('html, body').stop().animate({scrollTop: offset}, scrollTime);
        }
    }

    /**
     * Determine if current device is mobile.
     * @returns {boolean}
     */
    static isMobile(): boolean{
        var check = false;
        (function(a){
            if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
                check = true
        })(navigator.userAgent || navigator.vendor/*|| window.opera*/);

        return check;
    }

    /**
     * Resize image with respect to his parent.
     * Note: Make sure that image is fully loaded.
     * @param {jQuery} image
     * @param {boolean} outerSizes
     * @returns {void}
     */
    static resizeImage(image: JQuery, outerSizes: boolean = false): void {
        var container   : JQuery = image.parent(),
            parentWidth : number = (outerSizes) ? container.outerWidth() : container.width(),
            parentHeight: number = (outerSizes) ? container.outerHeight() : container.height(),
            width       : number = parentWidth,
            height      : number = parentWidth * image.height() / image.width();

        if( height < parentHeight ){
            height = parentHeight;
            width = parentHeight * image.width() / image.height();
        }

        image.height(height);
        image.width(width);
    }

    /**
     * Scale image without lose aspect ratio.
     * Note: Make sure that the image is fully loaded.
     * @param {jQuery} image
     * @param {boolean} outerSizes
     * @return {void}
     */
    static scaleImage(image: JQuery, outerSizes: boolean = false): void {
        var container  : JQuery = image.parent(),
            cHeight : number = (outerSizes) ? container.outerHeight() : container.height(),
            cWidth  : number = (outerSizes) ? container.outerWidth() : container.width(),
            iHeight : number = image.height(),
            iWidth  : number = image.width(),
            ratio   : number[],
            min     : number;

        ratio = [cWidth / iWidth, cHeight / iHeight ];
        min   = Math.min(ratio[0], ratio[1]);

        image.width( iWidth * min );
        image.height( iHeight * min );

    }

    /**
     * Simulate a place holder of a input.
     * Use data-placeholder attribute.
     * @param {jQuery} inputs
     * @returns {void}
     */
    static simulatePlaceHolder(inputs: JQuery): void {
        inputs.each(function(){
            var input: JQuery = $(this);
            var value: string = input.data('placeholder');

            // Initialize the input with placeholder value.
            input.val(value);

            // Show placeholder.
            input.focus(function(){
                if(input.val() === value)
                    input.val('');
            });

            // Hide placeholder
            input.blur(function(){
                if(input.val() === '')
                    input.val(value);
            });
        });
    }

    /**
     * Trim a string to a specified size.
     * Add suspension points if the string was trimmed.
     * @param {string} text
     * @param {number} size
     * @return {string} trimmed text
     */
    static trimText(text: string, size: number): string {
        // Removes white space at the end of a string.
        function trim (s: string): string{ return s.replace(/^\s+|\s+$/g, ''); }

        var newString     : string[] = text.split(" "),
            trimmedString : string = '',
            word          : string = '';

        for (var i = 0 ; i < newString.length; i ++) {
            word = newString[i];

            if (trimmedString.length > size)	{
                break;
            } else {
                trimmedString += word + ' ';

                if(trimmedString.length - 1 > size){
                    trimmedString = trimmedString.substr(0, trimmedString.lastIndexOf(word));
                    break;
                }
            }

        }

        trimmedString = trim(trimmedString);

        return ( trimmedString != text )
            ? trimmedString + '\u2026'
            : trimmedString;

    }

    /**
     * Wait to images are already loaded, then excecute a callback.
     * @param {jQuery} images
     * @param {function} callback
     * @returns {void}
     */
    static waitForImages(images: JQuery, callback: () => {}): void{
        var totalImages : number = images.length,
            loadedImages: number = 0;

        function onImageLoaded(){
            if(++loadedImages >= totalImages)
                if(callback && typeof callback === 'function')
                    callback();

        }

        images.each(function(){
            var image = $(this);

            if(image.get(0).complete)
                onImageLoaded();

            else
                image.on('load', function(){ onImageLoaded(); });
        });

    }

}