package org.superbiz.api;

import java.util.Date;
import java.util.List;
import java.util.logging.Logger;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.superbiz.model.Note;
import org.superbiz.dao.NoteDAO;
import org.superbiz.model.Employee;
import org.superbiz.service.EmployeeService;

@Path("/employees")
@Stateless
@Transactional
public class EmployeeController {

    @Inject
    private EmployeeService employeeService;

    @Inject
    NoteDAO noteDAO;

    @Inject
    private Logger logger;

    @GET
    @Path("all")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Employee> findAll() {
        logger.info("Find all");
        List<Employee> results = employeeService.findAll();
        logger.info(String.format("Employees: %s", results));
        return results;
    }

    @GET
    @Path("new")
    @Produces(MediaType.APPLICATION_JSON)
    public Note newNote() {
        Note note = new Note("blablebla", new Date());
        noteDAO.add(note);
        return note;
    }
}
