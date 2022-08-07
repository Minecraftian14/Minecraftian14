function open_tab_view(e, tab_view_id) {

  let i, tab_views, tab_menu_buttons;

  tab_views = document.getElementsByClassName("tab_view");
  for (i = 0; i < tab_views.length; i++)
    tab_views[i].style.display = "none";

  tab_menu_buttons = document.getElementsByClassName("tab_menu_button");
  for (i = 0; i < tab_menu_buttons.length; i++)
    tab_menu_buttons[i].className = tab_menu_buttons[i].className.replace(" active", "");

  document.getElementById(tab_view_id).style.display = "block";
  e.currentTarget.className += " active";
}
