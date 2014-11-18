ko.bindingHandlers.date = {
    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var allBindings = allBindingsAccessor();
        var dateBinding = allBindings.date;

        var dateString;

        if (typeof dateBinding == "string" || typeof dateBinding == "function") {
            dateString = ko.unwrap(dateBinding).toString();
        } else {
            dateFormat = ko.unwrap(dateBinding.format);
            dateString = ko.unwrap(dateBinding.date).toString(dateFormat);
        }

        if (element.tagName.toLowerCase() == "input")
        { element.value = dateString; }
        else
        { element.innerHTML = dateString; }
    }
};