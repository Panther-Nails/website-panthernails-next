export default function useDrawerHelper() {
  const handleMenuSearch = (e, data, setMenuData) => {
    setMenuData(filterBy(data, e.target.value));
  };

  const handleDrawerClose = (setMenuData, data) => {
    setMenuData(data);
  };

  function filterBy(data, query) {
    return query
      ? data.reduce((acc, item) => {
          if (item.Menus?.length) {
            const filtered = filterBy(item.Menus, query);
            if (filtered.length) return [...acc, { ...item, Menus: filtered }];
          }

          const { children, ...itemWithoutChildren } = item;
          return item.Text?.toLowerCase().includes(query.toLowerCase())
            ? [...acc, itemWithoutChildren]
            : acc;
        }, [])
      : data;
  }

  return { handleMenuSearch, handleDrawerClose };
}
