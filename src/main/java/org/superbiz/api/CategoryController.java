package org.superbiz.api;

import org.superbiz.dao.CategoryDAO;
import org.superbiz.model.Category;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import java.util.List;
import java.util.logging.Logger;

import static org.superbiz.util.MyMediaType.MEDIA_TYPE;

@Path("/category")
@Stateless
public class CategoryController {
    @Inject
    CategoryDAO categoryDAO;

    @Inject
    private Logger logger;

    @GET
    @Path("all")
    @Produces(MEDIA_TYPE)
    public List<Category> findAll() {
        List<Category> results = categoryDAO.findAll();
        logger.info(String.format("Categories: %s", results));
        return results;
    }
}
