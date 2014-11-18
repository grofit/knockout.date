ko.bindingHandlers.date = {
    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var allBindings = allBindingsAccessor();
        var dateBinding = allBindings.date;

        var dateString;

        if (typeof dateBinding == "string") {
            dateString = ko.unwrap(dateBinding).toString();
        } else {
            dateFormat = ko.unwrap(dateBinding.format);
            dateString = ko.unwrap(dateBinding.date).toString(dateFormat);
        }

        if ($(element).is("input"))
        { $(element).val(dateString); }
        else
        { $(element).text(dateString); }
    }
};