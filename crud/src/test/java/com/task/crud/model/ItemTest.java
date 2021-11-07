package com.task.crud.model;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

public class ItemTest {

    @Test
    public synchronized void testGetSerializedItems() {
        Item.refresh();
        String res = Item.getSerializedItems();
        Assertions.assertThat(res).isEqualTo("");
    }

    @Test
    public synchronized void testAddItem() {
        Item.refresh();
        Item.addItem("zero");
        Assertions.assertThat(Item.getSerializedItems()).isEqualTo("0: zero");
    }

    @Test
    public synchronized void testReplaceItem() {
        Item.refresh();
        Item.addItem("zero");
        Item.replaceItem(0, "one");
        Assertions.assertThat(Item.getSerializedItems()).isEqualTo("0: one");
    }

    @Test
    public synchronized void testDeleteItem() {
        Item.refresh();
        Item.addItem("zero");
        Item.deleteItem(0);
        Assertions.assertThat(Item.getSerializedItems()).isEqualTo("");
    }
}
