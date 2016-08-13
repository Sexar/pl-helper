/**
 * Created by sexar on 31/05/15.
 */
/// <reference path="declarations/jquery.d.ts" />
var Helper = (function () {
    function Helper() {
    }
    /**
     * Format a number with commas.
     * @param {number} num
     * @returns {string} formatted amount.
     */
    Helper.addCommas = function (num) {
        var arr, temp, rgx = /(\d+)(\d{3})/;
        temp = num + '';
        arr = temp.split('.');
        arr[1] = (arr[1]) ? '.' + arr[1] : '';
        while (rgx.test(arr[0]))
            arr[0] = arr[0].replace(rgx, '$1' + ',' + '$2');
        return arr[0] + arr[1];
    };
    /**
     * Center an item with respect to his parent.
     * @param {jQuery} item
     * @param {boolean} toParent
     * @param {string} orientation
     * @returns {void}
     */
    Helper.centerItem = function (item, toParent, orientation) {
        if (toParent === void 0) { toParent = true; }
        if (orientation === void 0) { orientation = 'BOTH'; }
        var container = (toParent) ? item.parent() : $(window), position = item.css('position');
        // Obtains values.
        var left = (container.outerWidth() - item.outerWidth()) / 2, top = (container.outerHeight() - item.outerHeight()) / 2;
        // Check if the position is absolute to asign a left and top values.
        if (position === 'absolute' || position === 'fixed') {
            if (orientation === 'HORIZONTAL' || orientation === 'BOTH')
                item.css({ 'left': left });
            if (orientation === 'VERTICAL' || orientation === 'BOTH')
                item.css({ 'top': top });
        }
        else {
            if (orientation === 'HORIZONTAL' || orientation === 'BOTH')
                item.css({ 'margin-left': left });
            if (orientation === 'VERTICAL' || orientation === 'BOTH')
                item.css({ 'margin-top': top });
        }
    };
    /**
     * Convert a date with format yyyy-mm-dd hh:mm:ss to human date.
     * @param {string} date
     * @returns {string} formatted date
     */
    Helper.dateToHumanFormat = function (date) {
        var days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'], d = (date.split(' ')[0]).split('-');
        return d[2] + ' de ' + months[parseInt(d[1])] + ' de ' + d[0];
    };
    /**
     * Generate a random number.
     * @param {number} num
     * @returns {number} random number
     */
    Helper.getRandNum = function (num) {
        return Math.floor(num * (Math.random() % 1));
    };
    /**
     * Generate a random number between two numbers.
     * @param {number} min
     * @param {number} max
     * @returns {number} random number
     */
    Helper.getRangeRandNum = function (min, max) {
        return min + Helper.getRandNum(max - min + 1);
    };
    /**
     * Go to anchor with animation.
     * @param {string} hash
     * @param {number} scrollTime
     * @param {number} extraOffset
     * @returns {void}
     * Note: Regular expression to validate the hash /^#(.*)$/
     */
    Helper.goToAnchor = function (hash, scrollTime, extraOffset) {
        if (scrollTime === void 0) { scrollTime = 1000; }
        if (extraOffset === void 0) { extraOffset = 0; }
        if ($(hash).length) {
            var offset = $(hash).offset().top - extraOffset;
            $('html, body').stop().animate({ scrollTop: offset }, scrollTime);
        }
    };
    /**
     * Determine if current device is mobile.
     * @returns {boolean}
     */
    Helper.isMobile = function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true;
        })(navigator.userAgent || navigator.vendor /*|| window.opera*/);
        return check;
    };
    /**
     * Resize image with respect to his parent.
     * Note: Make sure that image is fully loaded.
     * @param {jQuery} image
     * @param {boolean} outerSizes
     * @returns {void}
     */
    Helper.resizeImage = function (image, outerSizes) {
        if (outerSizes === void 0) { outerSizes = false; }
        var container = image.parent(), parentWidth = (outerSizes) ? container.outerWidth() : container.width(), parentHeight = (outerSizes) ? container.outerHeight() : container.height(), width = parentWidth, height = parentWidth * image.height() / image.width();
        if (height < parentHeight) {
            height = parentHeight;
            width = parentHeight * image.width() / image.height();
        }
        image.height(height);
        image.width(width);
    };
    /**
     * Scale image without lose aspect ratio.
     * Note: Make sure that the image is fully loaded.
     * @param {jQuery} image
     * @param {boolean} outerSizes
     * @return {void}
     */
    Helper.scaleImage = function (image, outerSizes) {
        if (outerSizes === void 0) { outerSizes = false; }
        var container = image.parent(), cHeight = (outerSizes) ? container.outerHeight() : container.height(), cWidth = (outerSizes) ? container.outerWidth() : container.width(), iHeight = image.height(), iWidth = image.width(), ratio, min;
        ratio = [cWidth / iWidth, cHeight / iHeight];
        min = Math.min(ratio[0], ratio[1]);
        image.width(iWidth * min);
        image.height(iHeight * min);
    };
    /**
     * Simulate a place holder of a input.
     * Use data-placeholder attribute.
     * @param {jQuery} inputs
     * @returns {void}
     */
    Helper.simulatePlaceHolder = function (inputs) {
        inputs.each(function () {
            var input = $(this);
            var value = input.data('placeholder');
            // Initialize the input with placeholder value.
            input.val(value);
            // Show placeholder.
            input.focus(function () {
                if (input.val() === value)
                    input.val('');
            });
            // Hide placeholder
            input.blur(function () {
                if (input.val() === '')
                    input.val(value);
            });
        });
    };
    /**
     * Trim a string to a specified size.
     * Add suspension points if the string was trimmed.
     * @param {string} text
     * @param {number} size
     * @return {string} trimmed text
     */
    Helper.trimText = function (text, size) {
        // Removes white space at the end of a string.
        function trim(s) { return s.replace(/^\s+|\s+$/g, ''); }
        var newString = text.split(" "), trimmedString = '', word = '';
        for (var i = 0; i < newString.length; i++) {
            word = newString[i];
            if (trimmedString.length > size) {
                break;
            }
            else {
                trimmedString += word + ' ';
                if (trimmedString.length - 1 > size) {
                    trimmedString = trimmedString.substr(0, trimmedString.lastIndexOf(word));
                    break;
                }
            }
        }
        trimmedString = trim(trimmedString);
        return (trimmedString != text)
            ? trimmedString + '\u2026'
            : trimmedString;
    };
    /**
     * Wait to images are already loaded, then excecute a callback.
     * @param {jQuery} images
     * @param {function} callback
     * @returns {void}
     */
    Helper.waitForImages = function (images, callback) {
        var totalImages = images.length, loadedImages = 0;
        function onImageLoaded() {
            if (++loadedImages >= totalImages)
                if (callback && typeof callback === 'function')
                    callback();
        }
        images.each(function () {
            var image = $(this);
            if (image.get(0).complete)
                onImageLoaded();
            else
                image.on('load', function () { onImageLoaded(); });
        });
    };
    return Helper;
}());
