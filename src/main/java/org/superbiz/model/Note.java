package org.superbiz.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    public Note() {
    }

    public Note(String text, Date modified) {
        this.text = text;
        this.modified = modified;
    }

    @Basic(optional = false)
    private String text;

    @Basic(optional = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date modified;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getModified() {
        return modified;
    }

    public void setModified(Date modified) {
        this.modified = modified;
    }
}

