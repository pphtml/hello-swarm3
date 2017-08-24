package org.superbiz.service;

import org.superbiz.model.Note;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
public class NoteDAO {
    @PersistenceContext
    private EntityManager entityManager;

    public void add(Note note) {
        entityManager.persist(note);
    }
}

