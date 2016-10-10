export function groupItems(items, itemsPerRow) {
    // convert an array into array of arrays of size itemsPerRow for grid layout
        var itemsGroups = [];
        var group = [];
        items.forEach(function(item) {
          if (group.length === itemsPerRow) {
            itemsGroups.push(group);
            group = [item];
          } else {
            group.push(item);
          }
        });

        if (group.length > 0) {
          itemsGroups.push(group);
        }
        return itemsGroups;
    }